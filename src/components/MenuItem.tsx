import { MenuItem } from '../types/index';

type MenuItemProps = {
    item: MenuItem,
    addItem: () => void
}

export default function MenuItems({item , addItem} : MenuItemProps) {
return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg flex justify-between "
    onClick={() => addItem()}
    >
    
    <p>{item.name}</p>
    <p className='font-black'>${item.price}</p>
    </button>
)
}
