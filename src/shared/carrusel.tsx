import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "../styles/carrusel.css"
import { Button } from "react-bootstrap";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

interface CarrusellProps {
    children: React.ReactNode;
    delay?: number;
    goToLastSlideOnChildrenCountChange?: boolean;
    disableSwipe?: boolean;
}

const Carrusel: React.FC<CarrusellProps> = ({
    children,
    delay = 500,
    goToLastSlideOnChildrenCountChange = false,
}) => {

    const swiperRef = useRef<SwiperType | null>(null);
    const [disableButtons, setDisableButtons] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevChildrenCountRef = useRef<number>(React.Children.count(children));
    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const safeAction = (actionCallback: () => void) => {
        if (!disableButtons) {
            setDisableButtons(true);
            actionCallback();
            setTimeout(() => setDisableButtons(false), delay);
        }
    };

    useEffect(() => {
        if (!swiperRef.current) return;
        swiperRef.current.updateAutoHeight(0);

        const currentCount = React.Children.count(children);
        const prevCount = prevChildrenCountRef.current;

        if (currentCount !== prevCount) {
            if (goToLastSlideOnChildrenCountChange && currentCount > prevCount) {
                swiperRef.current.slideTo(currentCount - 1);
            }
            prevChildrenCountRef.current = currentCount;
        }
    }, [children, goToLastSlideOnChildrenCountChange]);

    return (
        <div className="carrusel">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                autoHeight={true}
                navigation={false}
                pagination={{ clickable: true }}
                allowTouchMove={true}
                noSwiping={true}
                noSwipingClass="swiper-no-swiping"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>

            <div className="carousel-controls" style={{ marginTop: "1rem", textAlign: "center" }}>
                {currentIndex > 0 && (
                    <Button
                        variant="secondary"
                        onClick={() => safeAction(() => swiperRef.current?.slidePrev())}
                        style={{ marginRight: "1rem" }}
                    >
                        Anterior
                    </Button>
                )}
                {currentIndex < React.Children.count(children) - 1 && (
                    <Button
                        variant="primary"
                        onClick={() => safeAction(() => swiperRef.current?.slideNext())}
                        style={{ backgroundColor: "#395C8B", borderColor: "#395C8B" }}
                    >
                        Siguiente
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Carrusel;