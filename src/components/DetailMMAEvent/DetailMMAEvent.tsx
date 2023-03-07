import { AllEvents } from "types";

interface IProps {
  mmaEvent: AllEvents;
}

const date = new Date();

export const DetailMMAEvent = ({ mmaEvent }: IProps) => {
  return (
    <form action="#">
      <table>
        <thead>
          <tr>
            <th>Боец</th>
            <th>Событие</th>
            <th>Коэффициент</th>
            <th>Дата боя</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{mmaEvent.firstFighter}</td>
            <td>Победа</td>
            <td>
              {mmaEvent.firstWin} <input type="radio" name="event" />
            </td>
            <td>дата</td>
          </tr>
          <tr>
            <td>{mmaEvent.secondFighter}</td>
            <td>Победа</td>
            <td>
              {mmaEvent.secondWin}
              <input type="radio" name="event" />
            </td>
            <td>1994</td>
          </tr>
          <tr>
            <td>3</td>
            <td>8.6</td>
            <td>Властелин колец: Возвращение Короля</td>
            <td>2003</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
