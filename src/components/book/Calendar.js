import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' 


const events = 
  [
    { title: '슬픔은 파도처럼 밀려와',
      start: '2023-02-09',
      end: '2023-03-09',
      color: '#B2FA5C',
      url: 'https://www.drawingroom.kr/exhibition/current'
    },
    { title: '이현정초대전',
      start: '2023-02-15',
      end: '2023-03-20',
      color: '#FFBEFF',
      url: 'https://chungmunkyu.modoo.at/?link=22ziudnq'
    },
    { title: '그해 겨울은 따뜻했네',
      start: '2023-01-11',
      end: '2023-02-28',
      color: '#8C8CBE',
      url: 'https://blog.naver.com/galleryindex'
    },
    { title: '그 겨울의 행복',
      start: '2023-11-16',
      end: '2023-03-02',
      color: '#6E6ED7',
      url: 'https://www.nfm.go.kr/user/planexhibition/home/20/selectPlanExhibitionNView.do?planExhibitionIdx=1031&page=1'
    },
    { title: 'The other face of material',
      start: '2023-02-01',
      end: '2023-03-08',
      color: '#8C8CBE',
      url: 'https://www.seojung-art.com/exhibition/view/AGDKWQP'
    },
    { title: '두꺼비에 대한 단상',
      start: '2023-02-01',
      end: '2023-03-11',
      color: '#DCFFDC',
      url: 'https://www.instagram.com/gallerysaem/'
    }
  ];




function Calendar(props) {


  return (
    <>
      <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]}
        navLinks= "true" 
        events={events}
        dayMaxEvents = {true}
        height='600px'
      />
    </>
  );
  
}

export default Calendar;
