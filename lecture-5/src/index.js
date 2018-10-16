import './style.scss'
import $ from 'jquery'


$('.first').data('foo')

// ...

console.log($('.first').data())

global.app = {
    clicker: () => {console.log('clicked')}
}



$('.tapa').on('input', e => console.log(e.target.value))

$('.butt').click(() => console.log('click'))