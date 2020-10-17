# Button

> Atom Element: SUI button

![](./assets/screenshot.png)

## Installation

```sh
$ npm install @s-ui/react-atom-button --save
```

## Usage

### Basic usage

```js
import Button from '@s-ui/react-atom-button'

return (<div>
  <Button>Normal</Button>
  <Button focused>Focused</Button>
  <Button size='large' disabled>Disabled</Button>
</div>)

```

### Flexible props

All props available from regular buttons can be used.

```js
import Button from '@s-ui/react-atom-button'

return (<div>
  <Button onClick={() => alert('Primary with onClick')}>
    Primary with onClick
  </Button>
  <Button type='accent' title="Title: Lorem Ipsum">
    Accent with title
  </Button>
  <Button type='secondary' className='customClass'>
    Secondary with className
  </Button>
</div>)
```

### Button with AtomIcon

You could use the `AtomButton` along the `AtomIcon` in order to show the button text with an icon. The proper `size` and `color` of the `AtomIcon` will be used according to the needs of the `AtomButton` definition.

```js
import Button from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'

const Icon = <AtomIcon>
  <svg viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
</AtomIcon>

return (<div>
  <Button leftIcon={Icon} />
  <Button size="large" rightIcon={Icon} >
    Large icon
  </Button>
  <Button size="small" rightIcon={Icon} >
    Small icon
  </Button>
</div>)
```

### Button with elevation

Set `elevation` prop to display a shadow around the button. If it's not set no shadow will be shown.

```js
import Button from '@s-ui/react-atom-button'

return (
  <>
    <Button elevation="medium">
      Example
    </Button>
    <Button elevation="large">
      Example
    </Button>
  </>
)
```

### Button inside Form

By default `AtomButton` inside a `form` will submit the form

```js
import Button from '@s-ui/react-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button>Submit</Button>
    </div>
  </form>
)
```

If we need several `AtomButton` inside a form we can specify which one we want to submit the form w/ props `isButton` and `isSubmit`

```js
import Button from '@s-ui/react-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
    </div>
    <div>
      <Button isSubmit>Submit</Button>
    </div>
  </form>
)
```

### Rendering a link
When `link` property is passed, the component will render an html link.

```js
import Button from '@s-ui/react-atom-button'

return (
  <Button link href='http://www.schibsted.com/' target='_blank' rel="nofollow noopener">Link</Button>
)

```

output:

```html
<a class="sui-AtomButton sui-AtomButton--link" href="http://www.schibsted.com/" target='_blank'>Link</a>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/button).**
