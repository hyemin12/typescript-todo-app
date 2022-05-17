# typescript Todo App

## 기능

- Todo Item 추가
- Todo Item 수정
- Todo Item 삭제
- Todo Item 완료 여부 (체크박스)
- 할일 완료 목록

```css
 {
  /* <ul className="tab-nav">
        <li className="active">
          <span className="icon-list"></span>
        </li>
        <li>
          <span className="icon-clipboard"></span>
        </li>
      </ul> */
}
.tab-nav {
  display: flex;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  li {
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 20px 0;
    background-color: #ccc;
    cursor: pointer;
    span {
      display: inline-block;
      background-size: cover;
    }
    span.icon-list {
      width: 22px;
      height: 22px;
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512 '%3E%3Ctitle%3E%3C/title%3E%3Cg id='icomoon-ignore'%3E%3C/g%3E%3Cpath d='M0 0h128v128h-128zM192 32h320v64h-320zM0 192h128v128h-128zM192 224h320v64h-320zM0 384h128v128h-128zM192 416h320v64h-320z'%3E%3C/path%3E%3C/svg%3E");
    }
    span.icon-clipboard {
      width: 25px;
      height: 25px;
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Ctitle%3E%3C/title%3E%3Cg id='icomoon-ignore'%3E%3C/g%3E%3Cpath d='M464 64h-144c0-35.346-28.653-64-64-64s-64 28.654-64 64h-144c-8.836 0-16 7.164-16 16v416c0 8.837 7.164 16 16 16h416c8.837 0 16-7.163 16-16v-416c0-8.836-7.163-16-16-16zM256 32c17.673 0 32 14.327 32 32s-14.327 32-32 32c-17.673 0-32-14.327-32-32s14.327-32 32-32zM448 480h-384v-384h64v48c0 8.836 7.164 16 16 16h224c8.837 0 16-7.164 16-16v-48h64v384z'%3E%3C/path%3E%3Cpath d='M224 429.255l-102.627-118.627 29.254-29.255 73.373 57.372 137.371-121.372 29.257 29.254z'%3E%3C/path%3E%3C/svg%3E");
    }
  }
  li.active {
    background-color: #fff;
  }
}
```
