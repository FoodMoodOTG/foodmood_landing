import React from 'react';
import EditerModal from "@/app/Editor/components/modals/EditerModal";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import classes from "@/app/Editor/components/Edited.module.css";
import {FaEdit} from "react-icons/fa";
import {config} from "@/app/Editor/components/config";

const schema = z.object({
  description: z.string().min(1, "Описание не может быть пустым"), // Обязательное поле
});

function ChangeTextModal({id, oldValue}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    values: {
      description: oldValue,
    }
  });

  const onFormSubmit = (data) => {
    // onSubmit(data.description);
  };

  const handler = async (data) => {
    if(!data.description){
      return
    }

    try {
      await fetch(config.API_PATH + 'save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, value: data.description}),
      });
      window.location.reload()
    }catch (err){
      console.error(err);
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className={classes.btn} onClick={() => setIsOpen(true)}>
        <FaEdit/>
      </div>

      <EditerModal  isOpen={isOpen} title={'Новый текст'}>
        <form onSubmit={handleSubmit(handler)}>
          <textarea
            {...register("description")}
            placeholder="Введите описание..."
          />
          {errors.description && <p className="error">{errors.description.message}</p>}
          <button type="submit">Отправить</button>
          <button type="button" onClick={() => setIsOpen(false)}>
            Закрыть
          </button>
        </form>
      </EditerModal>
    </div>
  );
}

export default ChangeTextModal;