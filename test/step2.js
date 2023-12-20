// 영화 정보 객체
class Movie {
    constructor(id, title, genre, duration) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.duration = duration;
      this.availableSeats = []; // 해당 영화의 좌석 정보
    }
  
    addSeat(seatNumber) {
      this.availableSeats.push(seatNumber);
    }
  
    removeSeat(seatNumber) {
      const index = this.availableSeats.indexOf(seatNumber);
      if (index !== -1) {
        this.availableSeats.splice(index, 1);
      }
    }
  }
  
  // 예매 정보 객체
  class Reservation {
    constructor(movie, seatNumber, user) {
      this.movie = movie;
      this.seatNumber = seatNumber;
      this.user = user;
    }
  }
  
  // 영화 예매 시스템
  class BookingSystem {
    constructor() {
      this.movies = []; // 상영 중인 영화 목록
      this.reservations = []; // 예매된 좌석 목록
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    makeReservation(movie, seatNumber, user) {
      if (movie.availableSeats.includes(seatNumber)) {
        const reservation = new Reservation(movie, seatNumber, user);
        this.reservations.push(reservation);
        movie.removeSeat(seatNumber);
        return reservation;
      } else {
        console.log("해당 좌석은 예매할 수 없습니다.");
        return null;
      }
    }
  }
  
  // 예시 사용
  const bookingSystem = new BookingSystem();
  
  const movie1 = new Movie(1, "Inception", "Sci-Fi", 150);
  movie1.addSeat(1);
  movie1.addSeat(2);
  movie1.addSeat(3);
  
  const movie2 = new Movie(2, "The Shawshank Redemption", "Drama", 142);
  movie2.addSeat(1);
  movie2.addSeat(2);
  movie2.addSeat(3);
  
  bookingSystem.addMovie(movie1);
  bookingSystem.addMovie(movie2);
  
  const user1 = { name: "John" };
  
  const reservation1 = bookingSystem.makeReservation(movie1, 1, user1);
  console.log(reservation1);
  
  const reservation2 = bookingSystem.makeReservation(movie2, 2, user1);
  console.log(reservation2);
  
  console.log(movie1.availableSeats); // [2, 3]
  console.log(movie2.availableSeats); // [1, 3]