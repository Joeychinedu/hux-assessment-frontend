import styled from "styled-components";
import { HiMiniInformationCircle } from "react-icons/hi2";

const StyledContactDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

// A purely presentational component
function ContactDataBox({ contact }) {
  const { firstName, lastName, phoneNumber } = contact;

  return (
    <StyledContactDataBox>
      <Header>
        <div>
          <HiMiniInformationCircle />
          <p>
            Below is the info about{""}
            <span>{firstName}</span>
          </p>
        </div>
      </Header>

      <Section>
        <Contact>
          <p>
            {firstName} {lastName}
          </p>
          <span>&bull;</span>
          <p>{phoneNumber}</p>
          <span>&bull;</span>
        </Contact>

        {/* {lastName && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {lastName}
          </DataItem>
        )} */}
        {/* 

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {firstName ? "Yes" : "No"}
        </DataItem> */}

        {/* <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {firstName &&
              ` (${formatCurrency(contactPrice)} contact + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price> */}
      </Section>

      <Footer>
        <p>{"Your contacts love you"}</p>
      </Footer>
    </StyledContactDataBox>
  );
}

export default ContactDataBox;
