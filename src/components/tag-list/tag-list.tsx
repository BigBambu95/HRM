import React from 'react'
import { Typography } from 'components'

export interface TagListProps {
	tags: Array<string>;
}

const TagList = ({ tags }: TagListProps) => {
	const tagList =
		tags &&
		tags.map((tag) => (
			<Typography.Text className="tag-list__item" type="secondary" key={tag}>
				{tag}
			</Typography.Text>
		))

	return <div>{tagList}</div>
}

export default TagList
