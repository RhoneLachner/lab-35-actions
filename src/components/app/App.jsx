import React from 'react';
import styles from './App.css';

export default function App() {
  return <>
    <div>
      <a href="/">Home</a>
      <h1>Posts</h1>
    </div>

    <section className={styles.inputSection}>
      <h2>Create Post</h2>
      <form>
        <input name="title"></input>
        <textarea name="body"></textarea>
        <button>Submit ✓</button>
      </form>
    </section>

    <section>
      <ul></ul>
    </section>
  </>;
}
