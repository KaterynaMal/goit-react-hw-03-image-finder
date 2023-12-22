import React from 'react';

// import LoaderSpinner from 'react-loader-spinner';

// const Loader = () => {
//   return <LoaderSpinner type="Oval" color="#00BFFF" height={50} width={50} />;
// };

// export { Loader };

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>Loader</div>
  )
}
