import style from './Text.module.css';

export const Text = ({ children, textAlign = '', marginBottom = '0' }) => {
  return (
    <p
      className={[
        style['text'],
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(' ')}
    >
      {children}
    </p>
  );
};
