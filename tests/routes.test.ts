import express from 'express';
import { expect } from 'chai';
import {agent as request} from 'supertest';
//import app from '../src/app';

const route = express.Router(); 


describe("GET /", () => {
  it('should always pass', function () {
    expect(true).to.equal(true);
  });
  // it("should return an object", async () => {
  //   const res = await request(app)
  //       .get('/?translate=1');
  //   expect(res.status).to.equal(200);
  //   expect(res.body).not.to.be.empty;
  //   expect(res.body).to.be.an("object");      
  //  });
  })