import React, {useState} from "react";
import s from './TodoModal.module.scss';
import T from 'prop-types';
import { removeTodo } from "../../../store/actions/todosActions";
import {checkIcon, favoriteIcon, deleteIcon} from "../../Icons/Icons";
import {useDispatch} from "react-redux";
import ModalInput from "../../Form/ModalInput/ModalInput";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import ModalTextArea from "../../Form/ModalTextArea/ModalTextArea";

const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short Name!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short Company Name!')
    .max(100, 'Too Long Company Name!'),
  isFavorite: Yup.boolean(),
  isComplete: Yup.boolean(),
  lables: Yup.array()
});

const TodoModal = ({todo, onSubmit}) => {
  const [localTodo, setTodo] = useState(todo);
  const dispatch = useDispatch();

  console.log(localTodo);

  return (
    <Formik
      initialValues={{
        id: localTodo.id,
        title: localTodo.title,
        description: localTodo.description,
        lables: localTodo.lables,
        isFavorite: localTodo.isFavorite,
        isComplete: localTodo.isComplete
      }}
      validationSchema={TodoSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.todo_modal}>
        <div className={s.todo_header}>
          <span>Edit Todo</span>
        </div>
        <div className={s.todo_body}>
          <div className={s.todo_options}>
            <button
              onClick={() => setTodo({...localTodo, isFavorite: !localTodo.isFavorite})}
              type='button'
              className={`${s.button} ${s.button_favorite} ${localTodo.isFavorite ? s.list_item_favorite : ''}`}
              value={localTodo.isFavorite}
              name='isFavorite'>
              {favoriteIcon}
            </button>
            <button
              onClick={() => setTodo({...localTodo, isComplete: !localTodo.isComplete})}
              className={`${s.button} ${localTodo.isComplete ? s.button_complete : ''}`}
              type='button'
              value={localTodo.isComplete}
              name='isComplete'>
              {checkIcon}
            </button>
          </div>
          <div>
            <ModalInput
              label={'Title'}
              name='title'
            />
            <ModalTextArea
              label={'Description'}
              name='description'
            />
          </div>
          <div className={s.button_container}>
            <button type="submit" value='Submit' className={s.modal_submit}>
              SAVE
            </button>
            <button
              type="button"
              className={`${s.button} ${s.button_delete}`}
              onClick={() => dispatch(removeTodo(localTodo))}
            >
              {deleteIcon}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
};

TodoModal.defaultProps = {
  todo: {
    id: Math.floor(Math.random() * 99999).toString(),
    title: '',
    description: '',
    lables: [],
    isFavorite: false,
    isComplete: false
  }
};

TodoModal.propTypes = {
  todo: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    description: T.string,
    lables: T.array,
    isFavorite: T.bool.isRequired,
    isComplete: T.bool.isRequired
  }),
  src: T.string
};

export default TodoModal;