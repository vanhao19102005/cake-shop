const pool = require('./config/database');

async function testDatabase() {
  let connection;
  let exitCode = 0;

  try {
    connection = await pool.getConnection();
    const [products] = await connection.query('SELECT * FROM products');

    console.log('Kết nối MySQL thành công');
    console.log('Số lượng sản phẩm tìm được:', products.length);
    console.log('Dữ liệu products:', products);
  } catch (error) {
    console.error('Lỗi kiểm tra kết nối MySQL:', error);
    exitCode = 1;
  } finally {
    if (connection) {
      connection.release();
    }

    try {
      await pool.end();
    } catch (error) {
      console.error('Lỗi đóng pool MySQL:', error);
      exitCode = 1;
    }

    process.exit(exitCode);
  }
}

testDatabase();
