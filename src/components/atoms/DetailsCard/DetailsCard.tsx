import styles from "./DetailsCard.module.css";
import { Geolocation } from "../../../types/geolocation";

type DetailProps = {
  title?: string;
  data?: string;
};

const Detail: React.FC<DetailProps> = ({ title, data }) => {
  return (
    <section className={styles.detailWrapper}>
      <h2 className={styles.detailTitle}>{title}</h2>
      <p className={styles.detailData}>{data}</p>
    </section>
  );
};

type DetailsCardProps = {
  data?: Geolocation;
};

export const DetailsCard: React.FC<DetailsCardProps> = ({ data }) => {
  if (!data?.location) {
    return null;
  }

  const location = [
    data?.location.city,
    data?.location.country,
    data?.location.postalCode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className={styles.detailsCard}>
      <div className={styles.detailsCardPart}>
        <Detail title="ip address" data={data.ip} />
        <Detail title="location" data={location} />
      </div>
      <div className={styles.detailsCardPart}>
        <Detail title="timezone" data={`UTC ${data?.location.timezone}`} />
        <Detail title="isp" data={data?.isp} />
      </div>
    </article>
  );
};
