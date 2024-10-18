import React, { useState } from 'react';
import EditerModal from "@/app/Editor/components/modals/EditerModal";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import classes from "@/app/Editor/components/Edited.module.css";
import { FaEdit } from "react-icons/fa";
import {config} from "@/app/Editor/components/config";

const schema = z.object({
  src: z.string().min(1, "Путь не может быть пустым"), // Обязательное поле
  imageFile: z.any().refine(file => file?.[0], "Файл обязателен"), // Проверка, что файл выбран
});

function ChangeImageModal({ id, src }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    values: {
      src: src,
    }
  });

  const basename = (src) => {
    return src.split('/').pop();
  }

  const handler = async (data) => {
    if (!data.src || !data.imageFile[0]) {
      return;
    }

    try {
      const originalFile = data.imageFile[0];
      const newFileName = basename(data.src); // Используем нужное имя

      // Формируем FormData для отправки файла и текста
      const formData = new FormData();
      formData.append('file', originalFile); // Добавляем файл
      formData.append('src', data.src);    // Добавляем текст src

      const res = await fetch( config.API_PATH + 'upload-image?name=' + newFileName, {
        method: 'POST',
        body: formData,
      });

      if(res.status === 200){
        window.location.reload();
      }
    } catch (err) {
      alert('Error')
      console.error(err);
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className={classes.btn} onClick={() => setIsOpen(true)}>
        <FaEdit />
      </div>

      <EditerModal isOpen={isOpen} title={'Загрузить файл и изменить текст'}>
        <form onSubmit={handleSubmit(handler)}>
          <textarea
            {...register("src")}
            readOnly={true}
            placeholder="Путь до файла"
          />
          {errors.description && <p className="error">{errors.description.message}</p>}

          <input type="file" {...register("imageFile")} />
          {errors.imageFile && <p className="error">{errors.imageFile.message}</p>}

          <button type="submit">Отправить</button>
          <button type="button" onClick={() => setIsOpen(false)}>
            Закрыть
          </button>
        </form>
      </EditerModal>
    </div>
  );
}

export default ChangeImageModal;
