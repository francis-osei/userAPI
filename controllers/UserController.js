import Userinfo from '../modal/userModal.js';
import catchAsync from './../utils/catchAsync.js';

const getRandomUser = catchAsync(async (req, res, next) => {
  const randonNumber = Math.floor(Math.random() * 20) + 1;
  const doc = await Userinfo.find();

  console.log(randonNumber);
  res.status(200).json({
    status: 'success',
    data: doc[randonNumber],
  });
});

const getAllUser = catchAsync(async (req, res, next) => {
  const doc = await Userinfo.find();

  res.status(200).json({
    status: 'success',
    result: doc.length,
    data: doc,
  });
});

const specifyGender = catchAsync(async (req, res, next) => {
  const doc = await Userinfo.find({ gender: req.params.sex });

  res.status(200).json({
    status: 'success',
    result: doc.length,
    data: {
      doc,
    },
  });
});

export { getAllUser, specifyGender, getRandomUser };
