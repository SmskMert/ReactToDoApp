import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";

function ToDoClear() {
    const context = useContext(ItemContext);
    const clearCompleted = () => context.setList(context.list.filter(item => !item.completed));
    return (
        <button onClick={() => { clearCompleted() }} className="clean">
            Clean Completed Items
        </button>
    )
}

export default ToDoClear;