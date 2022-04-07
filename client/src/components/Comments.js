import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Comments = () => {
    let navigate = useNavigate()

    const formUpdate = (event) => {
        //update state
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // post comment
        navigate('/blogposts')
    }
    return (
        <div>
            <p>
                Mapped comments with this locations id
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    // value={}
                    onChange={formUpdate}
                    name="comment"
                    placeholder="Leave a comment!"
                />
            </form>
        </div>
    )
}

export default Comments