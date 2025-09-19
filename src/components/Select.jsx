import { useState } from "react"
import { 
  Button,
  SelectBody,
  SelectMenu
} from './../styled/index.jsx'

const Select = ({ items, value, onChange, style }) => {
  const [show, setShow] = useState(false)

  return (
    <SelectBody style={style}>
      <Button
        onClick={() => setShow(s => !s)}
      >
        <span>{items.find(item => item.id === value).label}</span>
        <svg style={{ marginLeft: '5px', transform: 'rotate(270deg)' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z" fill="#909099"></path>
        </svg>
      </Button>
      {
        show 
          ? (
             <SelectMenu>
              {
                items
                  .filter(item => item.id !== value)
                  .map(
                    (item, i) => (
                      <Button 
                        style={{ borderRadius: i === 0 ? '20px 20px 0px 0px' : i === items.length - 2 ? '0px 0px 20px 20px' : '0px 0px 0px 0px' }}
                        onClick={() => {
                          setShow(false)
                          onChange(item.id)
                        }} 
                        key={i}
                      >
                      {item.label}
                      </Button>
                    )
                  )
              }
            </SelectMenu>
          )
          : (
            null
          )
      }
    </SelectBody>
  )
}

export default Select