import { useQuery } from "@tanstack/react-query";
import Link from 'next/link';
import { useEffect } from "react";
import { Col, Row } from "reactstrap";
import placeHolderImage from "../../../../public/assets/images/placeholder.png";
import request from "../../../Utils/AxiosUtils";
import { blog } from "../../../Utils/AxiosUtils/API";
import { dateFormate } from "../../../Utils/CustomFunctions/DateFormate";
import Avatar from "../../CommonComponent/Avatar";
import NoDataFound from "../../CommonComponent/NoDataFound";
import DashboardWrapper from "../DashboardWrapper";
import { useRouter } from "next/navigation";


const LatestBlogs = () => { 
    
  const router = useRouter()   
    const { data, isLoading, refetch } = useQuery([blog], () => request({ url: blog, params: { status: 1, paginate: 2 } },router), {
        refetchOnWindowFocus: false, enabled: false, select: (data) => data?.data?.data,
    });
    useEffect(() => {
        refetch()
    }, [])
    return (
        <DashboardWrapper classes={{ title: "LatestBlogs" }}>
            <Row>
                {data?.length > 0 ? data?.map((elem, i) => (
                    <Col xs={6} key={i}>
                        <div className="blog-box">
                            <Link href={`/blog/edit/${elem?.id}`} className="blog-img">
                                <Avatar data={elem?.blog_thumbnail} customeClass={"img-fluid"} noPrevClass={true} placeHolder={placeHolderImage} name={elem?.title} width={278} height={180} />
                            </Link>
                            <div className="blog-content">
                                <Link href={`/blog/edit/${elem?.id}`}>{elem?.title}</Link>
                                <h6>{dateFormate(elem?.created_at)}</h6>
                            </div>
                        </div>
                    </Col>
                )) : <NoDataFound title={"NoDataFound"} noImage={true} />}
            </Row>
        </DashboardWrapper>
    )
}

export default LatestBlogs