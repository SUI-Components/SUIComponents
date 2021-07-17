/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {useState, Fragment} from 'react'

import AtomButton, {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonSizes,
  atomButtonTypes,
  atomButtonAlignment,
  atomButtonShapes
} from 'components/atom/button/src'
import {
  AntDesignIcon,
  Label,
  H1,
  H2,
  H4,
  Box,
  Bold,
  Paragraph,
  Article,
  Code,
  Grid,
  Cell,
  RadioButtonGroup,
  RadioButton,
  Input,
  Strong,
  Text
} from '@s-ui/documentation-library'

const BASE_CLASS_DEMO = `DemoAtomButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const stackMap = (arr = [], ...mappingCallbacks) =>
  mappingCallbacks.flatMap(function(e, index) {
    return this.map((value, innerIndex) =>
      e(value, innerIndex + this.length * index)
    )
  }, arr)

const facebookIcon = (
  <AntDesignIcon icon="AiFillFacebook" style={{color: 'currentColor'}} />
)
const twitterIcon = (
  <AntDesignIcon icon="AiOutlineTwitter" style={{color: 'currentColor'}} />
)
const googleIcon = (
  <AntDesignIcon icon="AiOutlineGoogle" style={{color: 'currentColor'}} />
)
const youtubeIcon = (
  <AntDesignIcon icon="AiFillYoutube" style={{color: 'currentColor'}} />
)
const whatsappIcon = (
  <AntDesignIcon icon="AiOutlineWhatsApp" style={{color: 'currentColor'}} />
)
const instagramIcon = (
  <AntDesignIcon icon="AiFillInstagram" style={{color: 'currentColor'}} />
)
const starIcon = (
  <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
)

const atomButtonColorsIterator = atomButtonColors
  .filter(color =>
    [
      'primary',
      'secondary',
      'accent',
      'neutral',
      'success',
      'alert',
      'error'
    ].includes(color)
  )
  .map((color, index) => [{color}, index])
const atomButtonSocialColorsIterator = atomButtonColors
  .filter(color =>
    [
      'social-facebook',
      'social-twitter',
      'social-google',
      'social-youtube',
      'social-whatsapp',
      'social-instagram'
    ].includes(color)
  )
  .map((color, index) => [{color}, index])
const atomButtonDesignsIterator = Object.values(
  atomButtonDesigns
).map((design, index) => [{design}, index])
const atomButtonSizesIterator = [
  atomButtonSizes.SMALL,
  undefined,
  atomButtonSizes.LARGE
].map((size, index) => [{size}, index])
const atomButtonAlignmentIterator = [
  undefined,
  atomButtonAlignment.LEFT,
  atomButtonAlignment.RIGHT
].map((alignment, index) => [{alignment}, index])
const atomButtonShapesIterator = Object.values(
  atomButtonShapes
).map((shape, index) => [{shape}, index])
const socialIconsMapper = {
  'social-facebook': facebookIcon,
  'social-twitter': twitterIcon,
  'social-google': googleIcon,
  'social-youtube': youtubeIcon,
  'social-whatsapp': whatsappIcon,
  'social-instagram': instagramIcon
}

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const TypeDeprecatedArticle = () => {
  const [color, setColor] = useState()
  const [design, setDesign] = useState()
  const handleSubmit = event => {
    event.preventDefault()
    alert('I was submitted!')
  }
  return (
    <Article className={CLASS_SECTION}>
      <H2>TYPES</H2>
      <H4>Correct usage</H4>
      <Paragraph>
        HTML button <Code>type</Code> attribute is used for specifying the
        behavior of button.
      </Paragraph>
      <Paragraph>
        <Strong>Tip</Strong>: Always specify the type attribute for the button
        element. Different browsers may use different default types for the
        button element
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        {Object.entries({
          button: 'The button is a clickable button',
          submit: 'The button is a submit button (submits form-data)',
          reset:
            'The button is a reset button (resets the form-data to its initial values)'
        }).map(([key, value]) => (
          <Fragment key={key}>
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
              <Label>{key}</Label>: <Text>{value}</Text>
            </Cell>
          </Fragment>
        ))}
      </Grid>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid cols={3} gutter={[8, 8]}>
          <Cell span={3}>
            <Input
              fullWidth
              type="text"
              id="fname"
              name="fname"
              placeholder="first name"
            />
          </Cell>
          <Cell span={3}>
            <Input
              fullWidth
              type="text"
              id="lname"
              name="lname"
              placeholder="Last name"
            />
          </Cell>
          <Cell>
            <AtomButton fullWidth type="submit">
              Submit
            </AtomButton>
          </Cell>
          <Cell>
            <AtomButton fullWidth type="button">
              Button
            </AtomButton>
          </Cell>
          <Cell>
            <AtomButton fullWidth type="reset">
              Reset
            </AtomButton>
          </Cell>
        </Grid>
      </form>
      <H4 deprecated>Deprecated usage</H4>
      <Paragraph>
        Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'
      </Paragraph>
      <Paragraph>
        This prop should <Bold>NEVER</Bold> be combined with <Code>color</Code>{' '}
        and <Code>design</Code> props. It causes unexpected behaviors. This prop
        is priorized over the 2 others previously mentioned.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={atomButtonTypes.length + 1}>
        {stackMap(
          [undefined, ...atomButtonTypes],
          (type, index) => (
            <Cell key={index}>
              <Label>{`${type}`}</Label>
            </Cell>
          ),
          (type, index) => (
            <Cell key={index}>
              <AtomButton type={type} design={design} color={color}>
                button
              </AtomButton>
            </Cell>
          )
        )}
      </Grid>
      <br />
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>color</Label>: {`${color || 'undefined'}`}
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>design</Label>: {`${design || 'undefined'}`}
        </Cell>
      </Grid>
      <Paragraph>–––</Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <RadioButtonGroup onChange={(event, value) => setColor(value)}>
            {atomButtonColorsIterator.map(([{color}], index) => (
              <RadioButton key={index} value={color} label={color} />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <RadioButtonGroup onChange={(event, value) => setDesign(value)}>
            {atomButtonDesignsIterator.map(([{design}], index) => (
              <RadioButton key={index} value={design} label={design} />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <H4>Transition</H4>
      <Box outline style={{width: 500}}>
        <Grid cols={5} gutter={[8, 8]}>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>type</Label>
          </Cell>
          <Cell />
          <Cell />
          <Cell style={flexCenteredStyle}>
            <Label>color</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>design</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>primary</Label>
          </Cell>
          <Cell>
            <AtomButton type="primary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="solid">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>solid</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>accent</Label>
          </Cell>
          <Cell>
            <AtomButton type="accent">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="accent" design="solid">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>accent</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>solid</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>secondary</Label>
          </Cell>
          <Cell>
            <AtomButton type="secondary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="outline">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>outline</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>tertiary</Label>
          </Cell>
          <Cell>
            <AtomButton type="tertiary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="flat">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>flat</Label>
          </Cell>
        </Grid>
      </Box>
    </Article>
  )
}

const Demo = () => {
  const [state, setState] = useState({content: 'button', link: false})
  const {
    negative,
    content,
    icon,
    leftIcon,
    rightIcon,
    socialButtons,
    link
  } = state
  return (
    <div className="sui-StudioPreview">
      <H1>Button</H1>
      <Paragraph>
        A button means an operation. Clicking a button will trigger
        corresponding business logic.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Colors and Designs</H2>
        <div>
          <Paragraph>
            These are the available <Code>color</Code> types of button, which
            are solid by default for each <Code>design</Code>.
          </Paragraph>
          <Article>
            <Grid cols={8} gutter={10}>
              <Cell />
              {atomButtonColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton design={design} color={color}>
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </>
              ))}
            </Grid>
          </Article>
          <br />
          <Paragraph>
            Buttons can also have the <Code>negative</Code> boolean prop for
            dark backgrounds.
          </Paragraph>
          <Article mode="dark">
            <Grid cols={8} gutter={10}>
              <Cell />
              {atomButtonColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton negative design={design} color={color}>
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Social network colors</H2>
        <div>
          <Paragraph>
            These are the available social network color types of button, which
            are solid by default for each <Code>design</Code>.
          </Paragraph>
          <Article>
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonSocialColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonSocialColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton
                        leftIcon={socialIconsMapper[color]}
                        design={design}
                        color={color}
                      >
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
          <br />
          <Paragraph>
            Buttons can also have the <Code>negative</Code> boolean prop for
            dark backgrounds.
          </Paragraph>
          <Article mode="dark">
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonSocialColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonSocialColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton
                        negative
                        leftIcon={socialIconsMapper[color]}
                        design={design}
                        color={color}
                      >
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Size</H2>
        <div>
          <Paragraph>
            Size of the button, under the prop <Code>size</Code> exported from{' '}
            <Code>atomButtonSizes</Code>
          </Paragraph>
        </div>
        <Grid cols={3} gutter={10}>
          {atomButtonSizesIterator.map(([{size}], index) => (
            <Fragment key={index}>
              <Cell style={flexCenteredStyle}>
                <Label>{size}</Label>
              </Cell>
            </Fragment>
          ))}
          {atomButtonSizesIterator.map(([{size}], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <AtomButton size={size} color="primary">
                Button
              </AtomButton>
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Alignment</H2>
        <div>
          <Paragraph>
            Button content alignment, under the prop <Code>alignment</Code>{' '}
            exported from <Code>atomButtonAlignment</Code>
          </Paragraph>
        </div>
        <Grid cols={3} gutter={10} style={{columnGap: '20px'}}>
          {atomButtonAlignmentIterator.map(([{alignment}], index) => (
            <Fragment key={index}>
              <Cell style={flexCenteredStyle}>
                <Label>{alignment || 'DEFAULT'}</Label>
              </Cell>
            </Fragment>
          ))}
          {atomButtonAlignmentIterator.map(([{alignment}], index) => (
            <Cell key={index}>
              <AtomButton alignment={alignment} fullWidth color="primary">
                Button
              </AtomButton>
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Shape</H2>
        <div>
          <Paragraph>
            Use <Code>shape</Code> prop to modify the border radius of the
            component. Choose between: <Code>squared</Code>,{' '}
            <Code>rounded</Code> and <Code>circular</Code>
          </Paragraph>
        </div>

        <Grid cols={4} gutter={[8, 8]}>
          <Cell />
          {atomButtonShapesIterator.map(([{shape}], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Label>{shape}</Label>
            </Cell>
          ))}
          {atomButtonSizesIterator.map(([{size}], index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{size}</Label>
              </Cell>
              {atomButtonShapesIterator.map(([{shape}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <AtomButton size={size} shape={shape}>
                    Button
                  </AtomButton>
                </Cell>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Link Design</H2>
        <div>
          <Paragraph>
            Buttons, can also look like links in some cases under the{' '}
            <Code>design</Code> 'link' prop value
          </Paragraph>
        </div>
        <Article>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea <AtomButton design="link">commodo</AtomButton>{' '}
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non <a href="#">proident</a>, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </Article>
      </Article>
      <br />
      <TypeDeprecatedArticle />
      <br />
      <Article className={CLASS_SECTION} mode="light">
        <H2>Other extra button boolean props</H2>
        <Paragraph>
          <Code>negative</Code>: proper usage with dark backgrounds.
        </Paragraph>
        <Paragraph>
          <Code>disabled</Code>: button is not trigerable.
        </Paragraph>
        <Paragraph>
          <Code>isLoading</Code> and <Code>loadingText</Code>: button status
          loading and its replacement text displayed.
        </Paragraph>
        <Paragraph>
          <Code>focused</Code>: button status activated.
        </Paragraph>
        <Paragraph>
          <Code>fullWidth</Code>: fits all the available with given.
        </Paragraph>
        <Paragraph>
          <Code>link</Code>: converts the button element to an anchor element,
          keeping its own configured design. A simple way to replace its own
          HTML element for an anchor ('a') element using the boolean link prop
          combined with the href prop for the destination url.
        </Paragraph>
        <Grid cols={2} gutter={10}>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Label>boolean props</Label>
            <RadioButtonGroup
              onChange={(event, value) => {
                const newState = {
                  ...state,
                  negative: undefined,
                  disabled: undefined,
                  isLoading: undefined,
                  focused: undefined,
                  fullWidth: undefined
                }
                switch (value) {
                  case 'negative':
                    setState({...newState, negative: true})
                    break
                  case 'disabled':
                    setState({...newState, disabled: true})
                    break
                  case 'isLoading':
                    setState({
                      ...newState,
                      isLoading: true
                    })
                    break
                  case 'focused':
                    setState({...newState, focused: true})
                    break
                  case 'fullWidth':
                    setState({...newState, fullWidth: true})
                    break
                  default:
                    setState({...newState})
                    break
                }
              }}
            >
              <RadioButton value="negative" label="negative" />
              <RadioButton value="disabled" label="disabled" />
              <RadioButton value="isLoading" label="isLoading" />
              <RadioButton value="focused" label="focused" />
              <RadioButton value="fullWidth" label="fullWidth" />
            </RadioButtonGroup>
          </Cell>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-end',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <Label>content</Label>
            <Input
              value={content}
              onChange={ev => {
                const content = ev.target.value
                setState({...state, content, loadingText: content})
              }}
              placeholder="content"
            />
          </Cell>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Label>size</Label>
            <RadioButtonGroup
              onChange={(event, value) => {
                setState({...state, size: value})
              }}
            >
              <RadioButton value="small" label="small" />
              <RadioButton value="medium" label="medium" />
              <RadioButton value="large" label="large" />
            </RadioButtonGroup>
          </Cell>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-end',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <Label>icon</Label>
            <RadioButton
              value="icon"
              onClick={(_, value) => {
                setState({...state, icon: value ? starIcon : undefined})
              }}
              label={starIcon}
            />
          </Cell>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Label>Social buttons</Label>
            <RadioButton
              value={socialButtons}
              onClick={() => {
                setState({...state, socialButtons: !socialButtons})
              }}
              label={socialButtons ? 'disable' : 'enable'}
            />
          </Cell>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-end',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            {icon && (
              <>
                <Label>icon position</Label>
                <RadioButtonGroup
                  onChange={(event, value) => {
                    const status = {
                      leftIcon: value === 'leftIcon' ? starIcon : undefined,
                      rightIcon: value === 'rightIcon' ? starIcon : undefined
                    }
                    setState({...state, ...status})
                  }}
                >
                  <RadioButton value="leftIcon" label="leftIcon" />
                  <RadioButton value="rightIcon" label="rightIcon" />
                </RadioButtonGroup>
              </>
            )}
          </Cell>
          <Cell
            span={2}
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Label>Link element</Label>
            <RadioButton
              value={link}
              onClick={() => {
                setState({...state, link: !link})
              }}
              label={link ? 'disable' : 'enable'}
            />
          </Cell>
          <Cell span={2}>
            <Box mode={negative ? 'dark' : 'light'}>
              <Grid cols={7} gutter={[10, 10]}>
                <Cell />
                {[[{design: undefined}], ...atomButtonDesignsIterator].map(
                  ([{design}], index) => (
                    <Fragment key={index}>
                      <Cell style={flexCenteredStyle}>
                        <Label>{design || '–'}</Label>
                      </Cell>
                    </Fragment>
                  )
                )}
                <Cell />
                {[
                  ...atomButtonColorsIterator,
                  [{color: undefined}],
                  ...(socialButtons ? atomButtonSocialColorsIterator : [])
                ].map(([{color}], index) => (
                  <Fragment key={index}>
                    <Cell
                      style={{
                        ...flexCenteredStyle,
                        justifyContent: 'flex-start'
                      }}
                    >
                      <Label>{color || '–'}</Label>
                    </Cell>
                    {[[{design: undefined}], ...atomButtonDesignsIterator].map(
                      ([{design}], key) => (
                        <Fragment key={key}>
                          <Cell
                            style={{
                              ...flexCenteredStyle,
                              flexDirection: 'column'
                            }}
                          >
                            <AtomButton
                              negative={negative === 'dark'}
                              design={design}
                              color={color}
                              {...state}
                              {...{
                                leftIcon: icon && leftIcon,
                                rightIcon: icon && rightIcon,
                                href: link ? '#' : undefined
                              }}
                            >
                              {icon && !leftIcon && !rightIcon
                                ? starIcon
                                : content}
                            </AtomButton>
                          </Cell>
                        </Fragment>
                      )
                    )}
                    <Cell
                      style={{...flexCenteredStyle, justifyContent: 'flex-end'}}
                    >
                      <Label>{color || '–'}</Label>
                    </Cell>
                  </Fragment>
                ))}
                <Cell />
                {[[{design: undefined}], ...atomButtonDesignsIterator].map(
                  ([{design}], index) => (
                    <Fragment key={index}>
                      <Cell style={flexCenteredStyle}>
                        <Label>{design || '–'}</Label>
                      </Cell>
                    </Fragment>
                  )
                )}
                <Cell />
              </Grid>
            </Box>
          </Cell>
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
