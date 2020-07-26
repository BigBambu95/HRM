import React from 'react';
import Record from '../record';
import {
  BackIcon, PencilIcon, CalendarIcon, MailIcon, DownloadIcon,
} from '../../svg';
import Button from '../button';
import WorkerStatus from '../worker-status';
import { TabBar, TabBarItem } from '../tab-bar';
import { ToolBar, ToolBarGroupItem } from '../tool-bar';
import Select from '../select/select';
import ButtonGroup from '../button-group';
import { ContextMenu } from '../context-menu';

const WorkerDetails = ({ worker, closeWorker }) => {
  const {
    name, profession, office, email, phone, department, avatar, status, documents = [], history = [],
  } = worker;

  const historyList = history.map((item, idx) => (
    <div key={idx} className="history__item">
      {item.name}
      {' '}
      <span className="date">{item.date}</span>
    </div>
  ));

  const documentList = documents.map((document, idx) => (
    <div key={idx} className="document">
      {document.name}
      <span>
        <a href={document.path}>Открыть</a>
        <a href={document.path} className="download-link">
          <DownloadIcon width="18px" height="18px" />
        </a>
      </span>
    </div>
  ));

  return (
    <div className="worker-details">
      <header className="worker-details__header">
        <ToolBar>
          <Button clickHandler={closeWorker} variant="icon">
            <BackIcon />
          </Button>
          <div>
            <span>{profession}</span>
            <span>{office}</span>
          </div>
          <ToolBarGroupItem>
            <MailIcon />
            <CalendarIcon />
            <PencilIcon />
          </ToolBarGroupItem>
        </ToolBar>
      </header>
      <div className="worker-details__content">
        <div className="worker-details__content__left">
          <div className="worker-details__content__picture">
            <img src={avatar} alt={name} />
          </div>
          <div className="worker-details__content__description">
            <div>
              <h1>{name}</h1>
              <h3>{profession}</h3>
            </div>
            <div>
              <Record label="E-mail" field={email} />
              <Record label="Телефон" field={phone} />
            </div>
            <div>
              <Record label="Отдел" field={department} />
              <Record label="Офис" field={office} />
            </div>
          </div>
          <div className="worker-details__content__info">
            <TabBar>
              <TabBarItem label="Общее">

                <ButtonGroup className="worker-details__content__info__btn-group">
                  <Button variant="text">Всего</Button>
                  <Button variant="text">Месяц</Button>
                  <Button variant="text">Квартал</Button>
                  <Button variant="text">Год</Button>
                </ButtonGroup>
                <Select />

              </TabBarItem>
              <TabBarItem label="Личная информация" />
              <TabBarItem label="Учет рабочего времени" />
            </TabBar>
          </div>
        </div>
        <div className="worker-details__content__right">
          <div className="worker-details__content__actions">
            <WorkerStatus color={status}>На работе</WorkerStatus>
            <ButtonGroup className="worker-details__content__actions__btn-group" vertical>
              <Button variant="outlined" color="green" width="100%" size="large">Премировать</Button>
              <Button variant="outlined" color="red" width="100%" size="large">Оштрафовать</Button>
              <div className="flex align-items-center">
                <Button variant="outlined" color="aqua" width="100%" size="large">В отпуск</Button>
                <ContextMenu />
              </div>
              <Button color="red">Уволить</Button>
            </ButtonGroup>
          </div>
          <div>
            <h3>Документы</h3>
            {documentList}
          </div>
          <div>
            <h3>История</h3>
            {historyList}
          </div>
        </div>
      </div>
    </div>
  );
};

WorkerDetails.defaultProps = {
  worker: {},
};

export default WorkerDetails;
