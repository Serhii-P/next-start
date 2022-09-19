import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router]);

  return (
    <div className={styles.wrapper}>
    <h1>404</h1>
    <p>Smth went wrong</p>
    </div>
  )
}

export default Error