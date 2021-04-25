import InternalForm from './Form'
import './form.css'
import FormItem from './FormItem'

type InternalForm = typeof InternalForm

interface InternalFormInterface extends InternalForm {
    Item: typeof FormItem;
}

const Form = InternalForm as InternalFormInterface

Form.Item = FormItem

export default Form