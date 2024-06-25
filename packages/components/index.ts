// import 'uno.css'
import YeButton from './button'
// 按需引入
export { YeButton }

const component = [YeButton]

const Components = {
    install(App) {
        component.forEach((item) => {
            App.component(item.name, item)
        });
    },
}

export default Components