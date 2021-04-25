import InternalTypography from './Typography'
import Text from './Text'
import './typography.css'

type InternalTypography = typeof InternalTypography

interface TypographyInterface extends InternalTypography {
	Text: typeof Text;
}

const Typography = InternalTypography as TypographyInterface

Typography.Text = Text

export default Typography
