import './HomeSCSS/HomeStory.scss';

import homestoryTitle from '../../assets/img/HomeStory/homestory_title.webp';
import coffeeholic_img1 from '../../assets/img/HomeStory/Coffeeholic/coffeeholic_img1.jpg';
import coffeeholic_img2 from '../../assets/img/HomeStory/Coffeeholic/coffeeholic_img2.webp';
import coffeeholic_img3 from '../../assets/img/HomeStory/Coffeeholic/coffeeholic_img3.webp';

import teaholic_img1 from '../../assets/img/HomeStory/Teaholic/teaholic_img1.webp';
import teaholic_img2 from '../../assets/img/HomeStory/Teaholic/teaholic_img2.webp';
import teaholic_img3 from '../../assets/img/HomeStory/Teaholic/teaholic_img3.webp';

import blog_img1 from '../../assets/img/HomeStory/Blog/blog_image1.webp';
import blog_img2 from '../../assets/img/HomeStory/Blog/blog_image2.webp';
import blog_img3 from '../../assets/img/HomeStory/Blog/blog_image3.webp';

const HomeStory = () => {
    const coffeeholicList = [
        {
            img: coffeeholic_img1,
            time: '15/09/2022',
            title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON',
            desc: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm...',
        },
        {
            img: coffeeholic_img2,
            time: '11/03/2022',
            title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT',
            desc: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...',
        },
        {
            img: coffeeholic_img3,
            time: '07 / 03 / 2022',
            title: 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ',
            desc: 'Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha...',
        },
    ];

    const teaholicList = [
        {
            img: teaholic_img1,
            time: '16/08/2022',
            title: 'KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY',
            desc: 'Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè...',
        },
        {
            img: teaholic_img2,
            time: '12/08/2022',
            title: 'KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ MÀN MÙA TRUNG THU HẤP DẪN ĐÔNG ĐẢO GIỚI TRẺ',
            desc: 'Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ háo...',
        },
        {
            img: teaholic_img3,
            time: '07/06/2022',
            title: '10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS',
            desc: 'Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh...',
        },
    ];

    const blogList = [
        {
            img: blog_img1,
            time: '22/08/2022',
            title: 'CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?',
            desc: 'Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong lòng....',
        },
        {
            img: blog_img2,
            time: '14/02/2022',
            title: 'LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?',
            desc: 'Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định phải cùng người ấy đến Nhà hẹn...',
        },
        {
            img: blog_img3,
            time: '11/02/2022',
            title: 'THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY',
            desc: 'Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ những người yêu, thương, quý, mến... Vậy bạn đã tìm được điểm hẹn lý tưởng chưa,...',
        },
    ];

    return (
        <div className="homestory">
            <div className="container">
                <div className="homestory_container">
                    <h2 className="homestory_title">
                        <img src={homestoryTitle} alt="HomeStory icon" />
                        Chuyện nhà
                    </h2>

                    <h3 className="homestory_blog_title">
                        <a href="#!">Coffeeholic</a>
                    </h3>
                    <div className="homestory_blog_list">
                        {coffeeholicList.map((item, index) => {
                            return (
                                <div key={index} className="blog_item">
                                    <div className="article_item_img">
                                        <a href="#!">
                                            <img
                                                src={item.img}
                                                alt="Coffeeholic image"
                                            />
                                        </a>
                                    </div>

                                    <div className="article_item_info">
                                        <p className="article_time">
                                            {item.time}
                                        </p>
                                        <h3>
                                            <a href="#!">{item.title}</a>
                                        </h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className="homestory_blog_title">
                        <a href="#!">Teaholic</a>
                    </h3>
                    <div className="homestory_blog_list">
                        {teaholicList.map((item, index) => {
                            return (
                                <div key={index} className="blog_item">
                                    <div className="article_item_img">
                                        <a href="#!">
                                            <img
                                                src={item.img}
                                                alt="Coffeeholic image"
                                            />
                                        </a>
                                    </div>

                                    <div className="article_item_info">
                                        <p className="article_time">
                                            {item.time}
                                        </p>
                                        <h3>
                                            <a href="#!">{item.title}</a>
                                        </h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className="homestory_blog_title">
                        <a href="#!">Blog</a>
                    </h3>
                    <div className="homestory_blog_list">
                        {blogList.map((item, index) => {
                            return (
                                <div key={index} className="blog_item">
                                    <div className="article_item_img">
                                        <a href="#!">
                                            <img
                                                src={item.img}
                                                alt="Coffeeholic image"
                                            />
                                        </a>
                                    </div>

                                    <div className="article_item_info">
                                        <p className="article_time">
                                            {item.time}
                                        </p>
                                        <h3>
                                            <a href="#!">{item.title}</a>
                                        </h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStory;
