# MoleculeInputTags

`MoleculeInputTags` is an `AtomInput` with the behavior of adding/removing `AtomTag` as a list

## Installation

```sh
$ npm install @s-ui/react-molecule-input-tags --save
```

## Usage

```js
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'
const closeIcon = () => <span>X</span>
```

### Basic usage

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} />
```

### Entering tags on Tab

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} onEnterKey="Tab" />
```

### Initial list of tags

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} tags={['john','paul','george','ringo']} />
```

### `AtomInput` props

All props of `AtomInput` can also be passed to `MoleculeInputTags`

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} errorState={true} />
```

### Just unique values

You can set `allowDuplicates` to false to force unique values

```js
<MoleculeInputTags allowDuplicates={false} />
```

### Max tags

use `maxTags` prop to set a number of maximum tags that can be entered, after reaching that number the field gets disabled

```js
<MoleculeInputTags maxTags={3} />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/inputTags/demo).**
