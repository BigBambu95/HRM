import React from 'react'
import { ButtonGroup, Button, Record, TabBar, List, Row, Typography, Select, TagList } from 'components'
import { BackIcon, PencilIcon, CalendarIcon, MailIcon, DownloadIcon, RemoveBasketIcon, TagIcon } from 'svg'
import { ToolBar, ToolBarGroupItem } from 'components/tool-bar'
import { getDictionaryValueById } from 'helpers/dictionaries'
import WorkerStatus from '../worker-status'

// MockData
const history = [
	{
		id: '1',
		name: 'Увеличили часовую ставку',
		date: '15.11.18',
	},
	{
		id: '2',
		name: 'Прошел испытательный срок',
		date: '15.11.18',
	},
	{
		id: '3',
		name: 'Устроился на работу',
		date: '15.09.18',
	},
]

// MockData
const documents: Documents = [
	{
		id: '1',
		name: 'Тестовая работа',
	},
	{
		id: '2',
		name: 'Анкета',
	},
	{
		id: '3',
		name: 'Резюме',
	},
	{
		id: 4,
		name: 'Портфолио',
	},
]

export interface WorkerDetailsProps {
	worker: IWorker;
	departments: Departments;
	offices: Offices;
	professions: Professions;
	closeWorker: () => void;
	history: ANY_MIGRATION_TYPE;
}

const WorkerDetails: React.FC<WorkerDetailsProps> = ({ worker, closeWorker, departments, offices, professions }) => {
	const { name, profession, office, email, phone, department, avatar, status, tags } = worker
	console.log(worker)
	return (
		<div className="worker-details">
			<header className="worker-details__header">
				<ToolBar>
					<Button onClick={closeWorker} variant="icon">
						<BackIcon />
					</Button>
					<TagList tags={tags} />
					<Button variant="text">
						<TagIcon width={16} height={16} />
						<Typography.Text color="purple">Добавить метку</Typography.Text>
					</Button>
					<ToolBarGroupItem>
						<Button variant="icon">
							<MailIcon />
						</Button>
						<Button variant="icon">
							<CalendarIcon />
						</Button>
						<Button variant="icon">
							<PencilIcon />
						</Button>
					</ToolBarGroupItem>
				</ToolBar>
			</header>
			<div className="worker-details__content">
				<div className="worker-details__content__left">
					<div className="worker-details__content__picture">
						<img src={`http://localhost:8080/images/${avatar}`} alt={name} />
					</div>
					<div className="worker-details__description">
						<div>
							<h1>{name}</h1>
							<h3>{getDictionaryValueById(professions, profession)}</h3>
						</div>
						<div>
							<Record label="E-mail" field={email} />
							<Record label="Телефон" field={phone} />
						</div>
						<div>
							<Record label="Отдел" field={getDictionaryValueById(departments, department)} />
							<Record label="Офис" field={getDictionaryValueById(offices, office)} />
						</div>
					</div>
					<div className="worker-details__content__info">
						<TabBar>
							<TabBar.Item label="Общее">
								<Row justify="space-between">
									<ButtonGroup>
										<Button variant="text">Всего</Button>
										<Button variant="text">Месяц</Button>
										<Button variant="text">Квартал</Button>
										<Button variant="text">Год</Button>
									</ButtonGroup>
									<Select items={[]} icon={<CalendarIcon />} />
								</Row>
								{/* <div>
									<Statistic title='Отработанные часы' value={salary?.hours} />
								</div> */}
							</TabBar.Item>
							<TabBar.Item label="Личная информация" />
							<TabBar.Item label="Учет рабочего времени" />
						</TabBar>
					</div>
				</div>
				<div className="worker-details__content__right">
					<div className="worker-details__content__actions">
						<WorkerStatus status={status}>На работе</WorkerStatus>
						<ButtonGroup className="worker-details__content__actions__btn-group" vertical>
							<Button variant="outlined" color="green" fullWidth size="large">
								Премировать
							</Button>
							<Button variant="outlined" color="red" fullWidth size="large">
								Оштрафовать
							</Button>
							<Button variant="outlined" color="aqua" fullWidth size="large">
								В отпуск
							</Button>
							<Button color="red" variant="text">
								Уволить
							</Button>
						</ButtonGroup>
					</div>
					<div className="worker-details__documents">
						<h3>Документы</h3>
						<List
							items={documents}
							renderItem={(item) => (
								<>
									<span>{item.name}</span>
									<Row gutter={[8, 0]}>
										<Button variant="icon">
											<DownloadIcon />
										</Button>
										<Button variant="icon">
											<RemoveBasketIcon />
										</Button>
									</Row>
								</>
							)}
						/>
					</div>
					<div className="worker-details__history">
						<h3>История</h3>
						<List
							items={history}
							renderItem={(item) => (
								<>
									<span>{item.name}</span>
									<Typography.Text type="secondary">{item.date}</Typography.Text>
								</>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkerDetails
