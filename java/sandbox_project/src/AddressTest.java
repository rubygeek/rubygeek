import junit.framework.TestCase;

public class AddressTest extends TestCase {
	
	public void testBuilderDefaults() {
		Address expected = new Address.Builder().build();
		assertEquals("State is ZZ", "ZZ", expected.getState());
		assertEquals("Zip is 99999", "99999", expected.getZip());
	}
	
	public void testBuilderAddressStateZip() {
		Address expected = new Address.Builder().street("this is an address").state("YY").zip("11111").build();
		assertEquals("Address is this is an address", "this is an address", expected.getStreet());
		assertEquals("Zip is 11111", "11111", expected.getZip());
		assertEquals("State is YY", "YY", expected.getState());		
	}
}
