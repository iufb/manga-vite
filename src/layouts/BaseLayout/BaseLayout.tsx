import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileLayout } from "../MobileLayout/MobileLayout";
import { AnimatePresence } from "framer-motion";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { AccessModal } from "../../components/modals/AccessModal/AccessModal";
import { useEffect } from "react";

export const BaseLayout = ({
  className,
  ...props
}: BaseLayoutProps): JSX.Element => {
  const { isModalOpen, accessModal } = useAppSelector((state) => state.modal);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current location is the root ("/")
    if (location.pathname === "/") {
      // Redirect to the "/home" route
      navigate("/home");
    }
  }, [location, navigate]);
  return (
    <>
      <div className={`${className}  layout h-screen `} {...props}>
        <Navbar />
        {width > 640 ? (
          <main
            className={` bg-lightGrey      ${
              isModalOpen && "overflow-hidden"
            } `}
          >
            <Outlet />
          </main>
        ) : (
          <MobileLayout />
        )}
        <Footer />
      </div>
      <AnimatePresence>
        {accessModal == "open" && (
          <ModalContainer key="modal" center>
            <SlidePanel position="up" modal="accessModal">
              <AccessModal />
            </SlidePanel>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};
