import render from "./render";

const user = { name: 'test' }
const createElement = (type, attrs, ...arg) => {
  return {
    type,
    attrs: attrs || {},
    children: arg || []
  }
}

const App = () => {
  return (
    <div className='so-good'>
      {user.name}
      <p className="nice">gg</p>
    </div>
  )
}

render(<App />, document.getElementById('root'));







