import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import Searchbar from '../../components/Common/Searchbar';
import NotSavedLink from '../../components/Folder/NotSavedLink';
import Titlebar from '../../components/Folder/Titlebar';

export default function FolderPage() {
  return (
    <>
      <Header isSticky={false} />
      <Titlebar />
      <Searchbar />
      <NotSavedLink />
      <Footer />
    </>
  );
}
