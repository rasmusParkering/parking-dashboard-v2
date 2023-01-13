import FloorsItem from './FloorsItem';

export const Floors = () => {
    return (
        <main className="floors">
            <FloorsItem floorNumber="6." floorName="Udkigspost" />
            <FloorsItem
                floorNumber="5."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={true}
                hideDisabled="hide-disabled"
            />
            <FloorsItem
                floorNumber="4."
                floorName="Betalingsparkering Månedsparkering"
            />
            <FloorsItem
                floorNumber="3."
                floorName="Betalingsparkering Månedsparkering"
            />
            <FloorsItem
                floorNumber="2."
                floorName="Reserveret Betalingsparkerings"
            />
            <FloorsItem
                floorNumber="1."
                floorName="Reserveret Månedsparkering"
            />
            <FloorsItem floorNumber="0." floorName="Korttidsparkering" />
        </main>
    );
};

export default Floors;
