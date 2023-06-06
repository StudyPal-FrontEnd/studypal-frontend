import { useState } from "react";
import React from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/Note.module.css";
import { Link } from "react-router-dom";

import SideSection from "./SideSection";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.container}>
      <SideSection />

      <div className={style.NoteForm}>
        <form className={style.formSection}>
          <input
            className={style.titleForm}
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e)}
            name="title"
            id="title"
            placeholder="Title:"
          />
          <br />
          <div className={style.textareaContainer}>
            <textarea
              className={style.noteTextarea}
              type="text"
              value={description}
              onChange={(e) => handleDescriptionChange(e)}
              name="description"
              id="description"
              placeholder="Type your note here..."
            ></textarea>
          </div>
          <br />
          <div className={style.formButtons}>
            <Link to="/dashboard">
              <button>Cancel</button>
            </Link>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
