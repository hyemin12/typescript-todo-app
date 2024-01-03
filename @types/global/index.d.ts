// 이미지 파일에 대한 타입 선언을 하는 파일 (예: images.d.ts)
declare module "*.png";
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
