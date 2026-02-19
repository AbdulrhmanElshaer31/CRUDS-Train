import { useParams } from "react-router-dom"
export default function Test() {
    const { id } = useParams()
    return <div>Hello The Product Id is : { id }</div>
}