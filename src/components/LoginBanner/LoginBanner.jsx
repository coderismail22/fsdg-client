
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const LoginBanner = () => {

    const images = [
        {
            imgUrl: "https://images.pexels.com/photos/1822461/pexels-photo-1822461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "aa"
        },
        {
            imgUrl: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            text: "aa"
        },

    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={img.imgUrl} className="object-cover w-full h-[560px] rounded-l-xl" />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    );
};

export default LoginBanner;