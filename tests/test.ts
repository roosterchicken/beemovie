import beemovie from '../dist/main'
import { expect } from "chai"
describe('beeMovie', function(){
    it("barry.Sentence() should execute without any errors", () => {
        expect(beemovie.Sentence(1)).to.be.a('string');
        expect(beemovie.Sentence(2)).to.be.a('string');
    });
    it("barry.Script() should execute without any errors", () => {
        expect(beemovie.Script()).to.be.a('string');
    });
    it("barry.Version() should execute without any errors", () => {
        expect(beemovie.Version()).to.be.a('string');
    });
    it("barry.Word() should execute without any errors", () => {
        expect(beemovie.Word(1)).to.be.a('string');
    });
    it("barry.Paragraph() should execute without any errors", () => {
        expect(beemovie.Paragraph(1)).to.be.a('string');
        expect(beemovie.Paragraph(2)).to.be.a('string');
    });
});
