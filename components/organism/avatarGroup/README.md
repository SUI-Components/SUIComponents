# OrganismAvatarGroup

Stack related avatars as a group.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-organism-avatar-group
```

## Usage

### Basic usage

#### Import package and use the component

```js
import OrganismAvatarGroup from '@s-ui/react-organism-avatar-group'

return (<OrganismAvatarGroup />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
@import '~@s-ui/react-organism-avatar-group/lib/index';
```

### Size

Modify the size of the avatars with `size` prop. Choose between `small`, `medium`, `large` and `xlarge`

```jsx
import OrganismAvatarGroup from '@s-ui/react-organism-avatar-group'

const SizeStory = () => (
  <>
    <OrganismAvatarGroup size="large">
      <OrganismAvatarGroup.Avatar name="Kiko Ruiz" />
      <OrganismAvatarGroup.Avatar name="Miguel Angel Duran" />
    </OrganismAvatarGroup>
  </>
);
```

### Max

Set a maximun number of avatars to show using `max` prop.

```jsx
import OrganismAvatarGroup from '@s-ui/react-organism-avatar-group'

const MaxStory = () => (
  <>
    <OrganismAvatarGroup max={1}>
      <OrganismAvatarGroup.Avatar name="Arturo Lopez" />
      <OrganismAvatarGroup.Avatar name="Andres Lucas" />
    </OrganismAvatarGroup>
  </>
);
```

> **Find full description and more examples in the [demo page](#).**