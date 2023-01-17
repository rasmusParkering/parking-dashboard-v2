import FloorsItem from './FloorsItem';

export const Floors = () => {
    return (
        <main className="floors">
            <FloorsItem floorNumber="6." floorName="Udkigspost" hideParking={true}
                hideDisabled={true}
                hideCharge={true} />
            {/* <p>mkvldfmvkldfmvkldf</p> */}
            <FloorsItem
                floorNumber="5."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={false}
            />
            <FloorsItem
                floorNumber="4."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={false}
                
            />
            <FloorsItem
                floorNumber="3."
                floorName="Betalingsparkering Månedsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={false}
            />
            <FloorsItem
                floorNumber="2."
                floorName="Reserveret Betalingsparkering"
                hideParking={false}
                hideDisabled={false}
                hideCharge={false}
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
                hideCharge={false} />
        </main>
    );
};

export default Floors;
