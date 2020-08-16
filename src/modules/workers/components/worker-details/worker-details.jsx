import React from 'react'
import {
	ButtonGroup,
	Button,
	Record,
	TabBar,
	List,
	Row,
	Typography,
} from 'components'
import {
	BackIcon,
	PencilIcon,
	CalendarIcon,
	MailIcon,
	DownloadIcon,
	RemoveBasketIcon,
} from 'svg'
import { ToolBar, ToolBarGroupItem } from 'components/tool-bar'
import WorkerStatus from '../worker-status'

const WorkerDetails = ({ worker, closeWorker }) => {
	const {
		name,
		profession,
		office,
		email,
		phone,
		department,
		avatar,
		status,
		tags,
	} = worker

	// MockData
	const history = [
		{
			_id: '1',
			name: 'Увеличили часовую ставку',
			date: '15.11.18',
		},
		{
			_id: '2',
			name: 'Прошел испытательный срок',
			date: '15.11.18',
		},
		{
			_id: '3',
			name: 'Устроился на работу',
			date: '15.09.18',
		},
	]

	// MockData
	const documents = [
		{
			_id: '1',
			name: 'Тестовая работа',
		},
		{
			_id: '2',
			name: 'Анкета',
		},
		{
			_id: '3',
			name: 'Резюме',
		},
		{
			_id: 4,
			name: 'Портфолио',
		},
	]

	return (
		<div className='worker-details'>
			<header className='worker-details__header'>
				<ToolBar>
					<Button onClick={closeWorker} variant='icon'>
						<BackIcon />
					</Button>
					<div>
						{tags?.map((tag) => {
							return (
								<Typography.Text type='secondary' key={tag}>
									{tag}
								</Typography.Text>
							)
						})}
					</div>
					<Button variant='text'>Добавить метку</Button>
					<ToolBarGroupItem>
						<Button variant='icon'>
							<MailIcon />
						</Button>
						<Button variant='icon'>
							<CalendarIcon />
						</Button>
						<Button variant='icon'>
							<PencilIcon />
						</Button>
					</ToolBarGroupItem>
				</ToolBar>
			</header>
			<div className='worker-details__content'>
				<div className='worker-details__content__left'>
					<div className='worker-details__content__picture'>
						<img src={avatar} alt={name} />
					</div>
					<div className='worker-details__description'>
						<div>
							<h1>{name}</h1>
							<h3>{profession}</h3>
						</div>
						<div>
							<Record label='E-mail' field={email} />
							<Record label='Телефон' field={phone} />
						</div>
						<div>
							<Record label='Отдел' field={department} />
							<Record label='Офис' field={office} />
						</div>
					</div>
					<div className='worker-details__content__info'>
						<TabBar>
							<TabBar.Item label='Общее'>
								<ButtonGroup className='worker-details__content__info__btn-group'>
									<Button variant='text'>Всего</Button>
									<Button variant='text'>Месяц</Button>
									<Button variant='text'>Квартал</Button>
									<Button variant='text'>Год</Button>
								</ButtonGroup>
							</TabBar.Item>
							<TabBar.Item label='Личная информация' />
							<TabBar.Item label='Учет рабочего времени' />
						</TabBar>
					</div>
				</div>
				<div className='worker-details__content__right'>
					<div className='worker-details__content__actions'>
						<WorkerStatus color={status}>На работе</WorkerStatus>
						<ButtonGroup
							className='worker-details__content__actions__btn-group'
							vertical
						>
							<Button
								variant='outlined'
								color='green'
								width='100%'
								size='large'
							>
								Премировать
							</Button>
							<Button variant='outlined' color='red' width='100%' size='large'>
								Оштрафовать
							</Button>
							<Button variant='outlined' color='aqua' width='100%' size='large'>
								В отпуск
							</Button>
							<Button color='red' variant='text'>
								Уволить
							</Button>
						</ButtonGroup>
					</div>
					<div className='worker-details__documents'>
						<h3>Документы</h3>
						<List
							items={documents}
							renderItem={(item) => (
								<>
									<span>{item.name}</span>
									<Row gutter={[8, 0]}>
										<Button variant='icon'>
											<DownloadIcon />
										</Button>
										<Button variant='icon'>
											<RemoveBasketIcon />
										</Button>
									</Row>
								</>
							)}
						/>
					</div>
					<div className='worker-details__history'>
						<h3>История</h3>
						<List
							items={history}
							renderItem={(item) => (
								<>
									<span>{item.name}</span>
									<Typography.Text type='secondary'>
										{item.date}
									</Typography.Text>
								</>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

WorkerDetails.defaultProps = {
	worker: {},
}

export default WorkerDetails
