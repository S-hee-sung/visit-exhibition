import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay } from 'swiper';
import styled from "styled-components";
import sw1  from "../book/images/swiper1.jpg";
import sw2  from "../book/images/swiper2.jpg";
import sw3  from "../book/images/swiper3.jpg";
import sw4  from "../book/images/swiper4.jpg";
import sw5  from "../book/images/swiper5.jpg";
import sw6  from "../book/images/swiper6.jpg";


const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 600px;

	.imgSlide {
		width: 300px;
		height: 300px;
	}
	
`;





function CalendarSwiper() {
	return (  
			<>
				<StyledSwiper
					direction={'vertical'}
					mousewheel
					keyboard
					modules={[ Mousewheel, Keyboard, Autoplay ]}
					slidesPerView={2}
		
					threshold={20}
					speed={1000}
					loop={true}
					autoplay={{ delay: 1000 }}
					spaceBetween={50}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src={sw1} className="imgSlide" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={sw2} className="imgSlide" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={sw3} className="imgSlide" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={sw4} className="imgSlide" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={sw5} className="imgSlide" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={sw6} className="imgSlide" />
					</SwiperSlide>
				</StyledSwiper>
			</>
	);
}

export default CalendarSwiper;