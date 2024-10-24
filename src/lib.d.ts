/**
 * static层全局类型声明

 */

declare module '*.png';
declare module '*.css';
declare module '*.less' {
  const content: any;
  export default content;
}
