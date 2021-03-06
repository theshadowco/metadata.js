/**
 * Перечислимые типы react-ui
 */

/**
 * Положение заголовка элемента управления
 * @type Object
 */
export const LABEL_POSITIONS = {
	auto: 'auto',
	hide: 'hide',
	left: 'left',
	right: 'right',
	top: 'top',
	bottom: 'bottom'
}

/**
 * Тип поля элемента управления data_field
 * @type Object
 */
export const DATA_FIELD_KIND = {
	input: 'input',   // поле ввода
	label: 'label',   // поле надписи
	toggle: 'toggle', // поле переключателя
	image: 'image',   // поле картинки
	text: 'text'      // многострочный редактор текста
}
