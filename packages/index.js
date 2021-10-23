import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
