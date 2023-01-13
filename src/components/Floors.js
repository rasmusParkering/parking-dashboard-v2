import FloorsItem from './FloorsItem';

export const Floors = () => {
    return (
        <main className="floors">
            <FloorsItem floorNumber="6." floorName="Udkigspost" hideParking={true}
                hideDisabled={true}
                hideCharge={true} />
            <FloorsItem
                floorNumber="5."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={true}
            />
            <FloorsItem
                floorNumber="4."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={true}
                
            />
            <FloorsItem
                floorNumber="3."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={true}
            />
            <FloorsItem
                floorNumber="2."
                floorName="Reserveret Betalingsparkerings"
                hideParking={false}
                hideDisabled={true}
                hideCharge={true}
            />
            <FloorsItem
                floorNumber="1."
                floorName="Reserveret Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={false}
            />
            <FloorsItem floorNumber="0." floorName="Korttidsparkering" hideParking={false}
                hideDisabled={false}
                hideCharge={true} />
        </main>
    );
};

export default Floors;
