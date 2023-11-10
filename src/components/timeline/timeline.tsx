import React from 'react';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ date, title, description }) => {
  return (
    <div className="event bg-white rounded p-4 shadow-md mb-4">
      <div className="event-date text-sm text-gray-600">{date}</div>
      <div className="event-details">
        <h3 className="event-title text-lg font-bold">{title}</h3>
        <p className="event-description text-gray-800">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  events: TimelineEventProps[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
};

const TimelineContainer: React.FC = () => {
  const timelineEvents = [
    {
      date: '2022-01-01',
      title: 'Evento 1',
      description: 'Descrição do Evento 1.',
    },
    {
      date: '2022-03-15',
      title: 'Evento 2',
      description: 'Descrição do Evento 2.',
    },
  ];

  return (
    <div className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Minha Timeline</h1>
        <Timeline events={timelineEvents} />
      </div>
    </div>
  );
};

export default TimelineContainer;
