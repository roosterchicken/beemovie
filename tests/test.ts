import { beeMovie, beeMovieScript, beeMovieVersion, beeMovieWord } from ".."
import { expect } from "chai"
describe('beeMovie', function(){
    it("beeMovie() should execute without any errors", function(){
        expect(beeMovie(1));
        expect(beeMovie(2));
    });
    it("beeMovieScript() should execute without any errors", function(){
        expect(beeMovieScript());
    });
    it("beeMovieVersion() should execute without any errors", function(){
        expect(beeMovieVersion());
        //console.log("v"+beeMovieVersion());
    });
    it("beeMovieWord() should execute without any errors", function(){
        expect(beeMovieWord(1));
        //console.log(beeMovieWord(69));
    });
});
