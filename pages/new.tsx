import Nav from "@/components/nav";
import Container from "@/components/container";
import Skeleton from "react-loading-skeleton";
import { useEntries } from "@/lib/swr-hooks";
import Entries from "@/components/entries";
import styles from "../styles/backgroundPosts/post.module.css";

export default function NewEntryPage() {
  const { entries, isLoading } = useEntries();
  if (isLoading) {
    return (
      <div className={styles.backgroundimage}>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.backgroundimage}>
      <Nav />
      <Container>
        <Entries entries={entries} />
      </Container>
    </div>
  );
}
